import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutCategoryInput } from "../inputs/MediaCreateOrConnectWithoutCategoryInput";
import { MediaCreateWithoutCategoryInput } from "../inputs/MediaCreateWithoutCategoryInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutCategoryInput", {})
export class MediaCreateNestedOneWithoutCategoryInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: MediaCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
