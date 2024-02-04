import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutProduct_category_treeInput } from "../inputs/CategoryCreateOrConnectWithoutProduct_category_treeInput";
import { CategoryCreateWithoutProduct_category_treeInput } from "../inputs/CategoryCreateWithoutProduct_category_treeInput";
import { CategoryUpdateToOneWithWhereWithoutProduct_category_treeInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutProduct_category_treeInput";
import { CategoryUpsertWithoutProduct_category_treeInput } from "../inputs/CategoryUpsertWithoutProduct_category_treeInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput", {})
export class CategoryUpdateOneRequiredWithoutProduct_category_treeNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_category_treeInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProduct_category_treeInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutProduct_category_treeInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutProduct_category_treeInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutProduct_category_treeInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutProduct_category_treeInput | undefined;
}
