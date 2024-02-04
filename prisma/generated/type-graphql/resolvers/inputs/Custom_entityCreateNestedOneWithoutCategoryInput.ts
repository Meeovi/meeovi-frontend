import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateOrConnectWithoutCategoryInput } from "../inputs/Custom_entityCreateOrConnectWithoutCategoryInput";
import { Custom_entityCreateWithoutCategoryInput } from "../inputs/Custom_entityCreateWithoutCategoryInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityCreateNestedOneWithoutCategoryInput", {})
export class Custom_entityCreateNestedOneWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutCategoryInput, {
    nullable: true
  })
  create?: Custom_entityCreateWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateOrConnectWithoutCategoryInput, {
    nullable: true
  })
  connectOrCreate?: Custom_entityCreateOrConnectWithoutCategoryInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: true
  })
  connect?: Custom_entityWhereUniqueInput | undefined;
}
