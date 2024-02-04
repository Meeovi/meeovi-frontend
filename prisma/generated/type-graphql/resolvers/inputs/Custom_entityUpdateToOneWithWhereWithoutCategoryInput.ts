import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityUpdateWithoutCategoryInput } from "../inputs/Custom_entityUpdateWithoutCategoryInput";
import { Custom_entityWhereInput } from "../inputs/Custom_entityWhereInput";

@TypeGraphQL.InputType("Custom_entityUpdateToOneWithWhereWithoutCategoryInput", {})
export class Custom_entityUpdateToOneWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  where?: Custom_entityWhereInput | undefined;

  @TypeGraphQL.Field(_type => Custom_entityUpdateWithoutCategoryInput, {
    nullable: false
  })
  data!: Custom_entityUpdateWithoutCategoryInput;
}
