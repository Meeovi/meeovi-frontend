import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateManyProduct_manufacturerInputEnvelope } from "../inputs/ProductCreateManyProduct_manufacturerInputEnvelope";
import { ProductCreateOrConnectWithoutProduct_manufacturerInput } from "../inputs/ProductCreateOrConnectWithoutProduct_manufacturerInput";
import { ProductCreateWithoutProduct_manufacturerInput } from "../inputs/ProductCreateWithoutProduct_manufacturerInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutProduct_manufacturerInput", {})
export class ProductCreateNestedManyWithoutProduct_manufacturerInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutProduct_manufacturerInput], {
    nullable: true
  })
  create?: ProductCreateWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutProduct_manufacturerInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutProduct_manufacturerInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductCreateManyProduct_manufacturerInputEnvelope, {
    nullable: true
  })
  createMany?: ProductCreateManyProduct_manufacturerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
