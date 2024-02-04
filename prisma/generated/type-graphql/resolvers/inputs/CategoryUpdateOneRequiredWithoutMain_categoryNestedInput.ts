import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutMain_categoryInput } from "../inputs/CategoryCreateOrConnectWithoutMain_categoryInput";
import { CategoryCreateWithoutMain_categoryInput } from "../inputs/CategoryCreateWithoutMain_categoryInput";
import { CategoryUpdateToOneWithWhereWithoutMain_categoryInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutMain_categoryInput";
import { CategoryUpsertWithoutMain_categoryInput } from "../inputs/CategoryUpsertWithoutMain_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutMain_categoryNestedInput", {})
export class CategoryUpdateOneRequiredWithoutMain_categoryNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutMain_categoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutMain_categoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutMain_categoryInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutMain_categoryInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutMain_categoryInput | undefined;
}
