import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutMain_categoryInput } from "../inputs/CategoryCreateOrConnectWithoutMain_categoryInput";
import { CategoryCreateWithoutMain_categoryInput } from "../inputs/CategoryCreateWithoutMain_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutMain_categoryInput", {})
export class CategoryCreateNestedOneWithoutMain_categoryInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutMain_categoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutMain_categoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutMain_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
