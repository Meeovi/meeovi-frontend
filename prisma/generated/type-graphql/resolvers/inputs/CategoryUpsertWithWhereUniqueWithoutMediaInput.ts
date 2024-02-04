import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutMediaInput } from "../inputs/CategoryCreateWithoutMediaInput";
import { CategoryUpdateWithoutMediaInput } from "../inputs/CategoryUpdateWithoutMediaInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutMediaInput", {})
export class CategoryUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: CategoryUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutMediaInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutMediaInput;
}
