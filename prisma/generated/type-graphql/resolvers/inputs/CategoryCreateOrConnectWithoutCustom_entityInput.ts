import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCustom_entityInput } from "../inputs/CategoryCreateWithoutCustom_entityInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCustom_entityInput", {})
export class CategoryCreateOrConnectWithoutCustom_entityInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCustom_entityInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCustom_entityInput;
}
