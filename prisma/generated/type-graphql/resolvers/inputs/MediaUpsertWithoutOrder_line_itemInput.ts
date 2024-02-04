import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutOrder_line_itemInput } from "../inputs/MediaCreateWithoutOrder_line_itemInput";
import { MediaUpdateWithoutOrder_line_itemInput } from "../inputs/MediaUpdateWithoutOrder_line_itemInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutOrder_line_itemInput", {})
export class MediaUpsertWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutOrder_line_itemInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: MediaCreateWithoutOrder_line_itemInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
