import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutOrder_line_itemInput } from "../inputs/MediaCreateOrConnectWithoutOrder_line_itemInput";
import { MediaCreateWithoutOrder_line_itemInput } from "../inputs/MediaCreateWithoutOrder_line_itemInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutOrder_line_itemInput", {})
export class MediaCreateNestedOneWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_itemInput, {
    nullable: true
  })
  create?: MediaCreateWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutOrder_line_itemInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutOrder_line_itemInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
