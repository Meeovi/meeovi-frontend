import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutOrder_line_item_downloadInput } from "../inputs/MediaUpdateWithoutOrder_line_item_downloadInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutOrder_line_item_downloadInput", {})
export class MediaUpdateToOneWithWhereWithoutOrder_line_item_downloadInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutOrder_line_item_downloadInput;
}
