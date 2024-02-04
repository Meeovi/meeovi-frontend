import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutProduct_categoryInput } from "../inputs/CategoryCreateOrConnectWithoutProduct_categoryInput";
import { CategoryCreateWithoutProduct_categoryInput } from "../inputs/CategoryCreateWithoutProduct_categoryInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedOneWithoutProduct_categoryInput", {})
export class CategoryCreateNestedOneWithoutProduct_categoryInput {
  @TypeGraphQL.Field(_type => CategoryCreateWithoutProduct_categoryInput, {
    nullable: true
  })
  create?: CategoryCreateWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateOrConnectWithoutProduct_categoryInput, {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProduct_categoryInput | undefined;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput | undefined;
}
