import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateWithoutOrder_line_item_downloadInput";
import { MediaUpdateWithoutOrder_line_item_downloadInput } from "../inputs/MediaUpdateWithoutOrder_line_item_downloadInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";

@TypeGraphQL.InputType("MediaUpsertWithoutOrder_line_item_downloadInput", {})
export class MediaUpsertWithoutOrder_line_item_downloadInput {
  @TypeGraphQL.Field(_type => MediaUpdateWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  update!: MediaUpdateWithoutOrder_line_item_downloadInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  create!: MediaCreateWithoutOrder_line_item_downloadInput;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  where?: MediaWhereInput | undefined;
}
