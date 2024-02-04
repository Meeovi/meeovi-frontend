import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutCategory_tagInput } from "../inputs/CategoryCreateWithoutCategory_tagInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutCategory_tagInput", {})
export class CategoryCreateOrConnectWithoutCategory_tagInput {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_tagInput, {
    nullable: false
  })
  create!: CategoryCreateWithoutCategory_tagInput;
}
