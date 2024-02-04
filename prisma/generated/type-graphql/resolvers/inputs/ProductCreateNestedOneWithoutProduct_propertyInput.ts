import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutProduct_propertyInput } from "../inputs/ProductCreateOrConnectWithoutProduct_propertyInput";
import { ProductCreateWithoutProduct_propertyInput } from "../inputs/ProductCreateWithoutProduct_propertyInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedOneWithoutProduct_propertyInput", {})
export class ProductCreateNestedOneWithoutProduct_propertyInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutProduct_propertyInput, {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_propertyInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutProduct_propertyInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_propertyInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
