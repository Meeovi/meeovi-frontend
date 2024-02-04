import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateWithoutCategoryInput } from "../inputs/Custom_entityCreateWithoutCategoryInput";
import { Custom_entityUpdateWithoutCategoryInput } from "../inputs/Custom_entityUpdateWithoutCategoryInput";
import { Custom_entityWhereInput } from "../inputs/Custom_entityWhereInput";

@TypeGraphQL.InputType("Custom_entityUpsertWithoutCategoryInput", {})
export class Custom_entityUpsertWithoutCategoryInput {
  @TypeGraphQL.Field(_type => Custom_entityUpdateWithoutCategoryInput, {
    nullable: false
  })
  update!: Custom_entityUpdateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutCategoryInput, {
    nullable: false
  })
  create!: Custom_entityCreateWithoutCategoryInput;

  @TypeGraphQL.Field(_type => Custom_entityWhereInput, {
    nullable: true
  })
  where?: Custom_entityWhereInput | undefined;
}
