import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutCategory_tagInput } from "../inputs/CategoryCreateOrConnectWithoutCategory_tagInput";
import { CategoryCreateWithoutCategory_tagInput } from "../inputs/CategoryCreateWithoutCategory_tagInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutCategory_tagInput", {})
export class CategoryCreateNestedOneWithoutCategory_tagInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutCategory_tagInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutCategory_tagInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutCategory_tagInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutCategory_tagInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
