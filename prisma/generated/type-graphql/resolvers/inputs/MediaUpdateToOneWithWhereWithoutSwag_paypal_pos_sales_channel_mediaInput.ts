import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutSwag_paypal_pos_sales_channel_mediaInput } from "../inputs/MediaUpdateWithoutSwag_paypal_pos_sales_channel_mediaInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_mediaInput", {})
export class MediaUpdateToOneWithWhereWithoutSwag_paypal_pos_sales_channel_mediaInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutSwag_paypal_pos_sales_channel_mediaInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutSwag_paypal_pos_sales_channel_mediaInput;
}
