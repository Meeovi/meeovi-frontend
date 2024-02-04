import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateWithoutOrder_line_itemInput } from "../inputs/MediaCreateWithoutOrder_line_itemInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateOrConnectWithoutOrder_line_itemInput", {})
export class MediaCreateOrConnectWithoutOrder_line_itemInput {
  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: false
  })
  where!: MediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => MediaCreateWithoutOrder_line_itemInput, {
    nullable: false
  })
  create!: MediaCreateWithoutOrder_line_itemInput;
}
