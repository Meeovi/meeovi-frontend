import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_tagInput } from "../inputs/ProductCreateOrConnectWithoutProduct_tagInput";
import { ProductCreateWithoutProduct_tagInput } from "../inputs/ProductCreateWithoutProduct_tagInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_tagInput", {})
export class ProductCreateNestedOneWithoutProduct_tagInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_tagInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_tagInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_tagInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_tagInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
