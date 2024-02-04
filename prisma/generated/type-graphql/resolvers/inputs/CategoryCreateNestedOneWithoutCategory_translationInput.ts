import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutCategory_translationInput } from "../inputs/CategoryCreateOrConnectWithoutCategory_translationInput";
import { CategoryCreateWithoutCategory_translationInput } from "../inputs/CategoryCreateWithoutCategory_translationInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutCategory_translationInput", {})
export class CategoryCreateNestedOneWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_translationInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutCategory_translationInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
