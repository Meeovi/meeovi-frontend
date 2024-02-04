import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaUpdateWithoutOrder_line_itemInput } from "../inputs/MediaUpdateWithoutOrder_line_itemInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpdateToOneWithWhereWithoutOrder_line_itemInput", {})
export class MediaUpdateToOneWithWhereWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  data!: MediaUpdateWithoutOrder_line_itemInput;
}
