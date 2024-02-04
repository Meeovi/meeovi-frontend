import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateManyProductInputEnvelope } from "../inputs/Product_propertyCreateManyProductInputEnvelope";
import { Product_propertyCreateOrConnectWithoutProductInput } from "../inputs/Product_propertyCreateOrConnectWithoutProductInput";
import { Product_propertyCreateWithoutProductInput } from "../inputs/Product_propertyCreateWithoutProductInput";
import { Product_propertyWhereUniqueInput } from "../inputs/Product_propertyWhereUniqueInput";

@TypeGraphQL.InputType("Product_propertyCreateNestedManyWithoutProductInput", {})
export class Product_propertyCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_propertyCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_propertyCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_propertyCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_propertyCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_propertyCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_propertyWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_propertyWhereUniqueInput[] | undefined;
}
