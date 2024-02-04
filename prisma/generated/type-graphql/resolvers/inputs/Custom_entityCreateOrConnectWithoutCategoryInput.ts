import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateWithoutCategoryInput } from "../inputs/Custom_entityCreateWithoutCategoryInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityCreateOrConnectWithoutCategoryInput", {})
export class Custom_entityCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Custom_entityCreateWithoutCategoryInput;
}
