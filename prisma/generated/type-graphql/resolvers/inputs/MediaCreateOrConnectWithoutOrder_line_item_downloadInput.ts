import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateWithoutOrder_line_item_downloadInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutOrder_line_item_downloadInput", {})
export class MediaCreateOrConnectWithoutOrder_line_item_downloadInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_item_downloadInput, {
    nullable: false
  })
  create!: MediaCreateWithoutOrder_line_item_downloadInput;
}
