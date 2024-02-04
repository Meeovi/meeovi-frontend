import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateOrConnectWithoutProductInput } from "../inputs/Product_manufacturerCreateOrConnectWithoutProductInput";
import { Product_manufacturerCreateWithoutProductInput } from "../inputs/Product_manufacturerCreateWithoutProductInput";
import { Product_manufacturerUpdateToOneWithWhereWithoutProductInput } from "../inputs/Product_manufacturerUpdateToOneWithWhereWithoutProductInput";
import { Product_manufacturerUpsertWithoutProductInput } from "../inputs/Product_manufacturerUpsertWithoutProductInput";
import { Product_manufacturerWhereInput } from "../inputs/Product_manufacturerWhereInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateOneWithoutProductNestedInput", {})
export class Product_manufacturerUpdateOneWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutProductInput, {
    nullable: true
  })
  create?: Product_manufacturerCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: Product_manufacturerCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpsertWithoutProductInput, {
    nullable: true
  })
  upsert?: Product_manufacturerUpsertWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  disconnect?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereInput, {
    nullable: true
  })
  delete?: Product_manufacturerWhereInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: true
  })
  connect?: Product_manufacturerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateToOneWithWhereWithoutProductInput, {
    nullable: true
  })
  update?: Product_manufacturerUpdateToOneWithWhereWithoutProductInput | undefined;
}
