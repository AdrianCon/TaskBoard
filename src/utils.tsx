
export function getStatusImg(status: number | undefined) {
  switch (status) {
    case 1:
      return "/Done_round_duotone.svg";
    case 2:
      return "/Time_atack_duotone.svg";
    case 3:
      return "/close_ring_duotone.svg";
    default:
      return undefined;
  }
}

export function getStatusBackgroundColor(status: number | undefined) {
  switch (status) {
    case 1:
      return "#32d657"; //Completed
    case 2:
      return "#e9a23b"; //In Progress
    case 3:
      return "#dd524c"; //Won't Do
    default:
      return "#e3e8ef"; // Default color for unknown status
  }
}