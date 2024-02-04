import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutProduct_categoryInput } from "../inputs/CategoryCreateOrConnectWithoutProduct_categoryInput";
import { CategoryCreateWithoutProduct_categoryInput } from "../inputs/CategoryCreateWithoutProduct_categoryInput";
import { CategoryUpdateToOneWithWhereWithoutProduct_categoryInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutProduct_categoryInput";
import { CategoryUpsertWithoutProduct_categoryInput } from "../inputs/CategoryUpsertWithoutProduct_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput", {})
export class CategoryUpdateOneRequiredWithoutProduct_categoryNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_categoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProduct_categoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutProduct_categoryInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutProduct_categoryInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutProduct_categoryInput | undefined;
}
