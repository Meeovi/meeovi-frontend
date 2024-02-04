import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateOrConnectWithoutOrder_line_item_downloadInput";
import { MediaCreateWithoutOrder_line_item_downloadInput } from "../inputs/MediaCreateWithoutOrder_line_item_downloadInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutOrder_line_item_downloadInput", {})
export class MediaCreateNestedOneWithoutOrder_line_item_downloadInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  create?: MediaCreateWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutOrder_line_item_downloadInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutOrder_line_item_downloadInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
