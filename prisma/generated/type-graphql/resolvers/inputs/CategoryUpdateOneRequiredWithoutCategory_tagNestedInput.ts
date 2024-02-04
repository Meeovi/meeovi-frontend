import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutCategory_tagInput } from "../inputs/CategoryCreateOrConnectWithoutCategory_tagInput";
import { CategoryCreateWithoutCategory_tagInput } from "../inputs/CategoryCreateWithoutCategory_tagInput";
import { CategoryUpdateToOneWithWhereWithoutCategory_tagInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutCategory_tagInput";
import { CategoryUpsertWithoutCategory_tagInput } from "../inputs/CategoryUpsertWithoutCategory_tagInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateOneRequiredWithoutCategory_tagNestedInput", {})
export class CategoryUpdateOneRequiredWithoutCategory_tagNestedInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_tagInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutCategory_tagInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutCategory_tagInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategory_tagInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpsertWithoutCategory_tagInput, {
    nullable: true
  })
  upsert?: CategoryUpsertWithoutCategory_tagInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CategoryUpdateToOneWithWhereWithoutCategory_tagInput, {
    nullable: true
  })
  update?: CategoryUpdateToOneWithWhereWithoutCategory_tagInput | undefined;
}
