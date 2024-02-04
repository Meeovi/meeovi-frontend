import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutCategory_translationInput } from "../inputs/CategoryCreateOrConnectWithoutCategory_translationInput";
import { CategoryCreateWithoutCategory_translationInput } from "../inputs/CategoryCreateWithoutCategory_translationInput";
import { CategoryUpdateToOneWithWhereWithoutCategory_translationInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutCategory_translationInput";
import { CategoryUpsertWithoutCategory_translationInput } from "../inputs/CategoryUpsertWithoutCategory_translationInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutCategory_translationNestedInput", {})
export class CategoryUpdateOneRequiredWithoutCategory_translationNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_translationInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutCategory_translationInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutCategory_translationInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutCategory_translationInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutCategory_translationInput | undefined;
}
