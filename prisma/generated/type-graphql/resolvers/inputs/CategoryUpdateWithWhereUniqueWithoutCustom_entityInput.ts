import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutCustom_entityInput } from "../inputs/CategoryUpdateWithoutCustom_entityInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutCustom_entityInput", {})
export class CategoryUpdateWithWhereUniqueWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutCustom_entityInput, {
    nullable: false
  })
  data!: CategoryUpdateWithoutCustom_entityInput;
}
