import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateManyMediaInputEnvelope } from "../inputs/Product_manufacturerCreateManyMediaInputEnvelope";
import { Product_manufacturerCreateOrConnectWithoutMediaInput } from "../inputs/Product_manufacturerCreateOrConnectWithoutMediaInput";
import { Product_manufacturerCreateWithoutMediaInput } from "../inputs/Product_manufacturerCreateWithoutMediaInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerCreateNestedManyWithoutMediaInput", {})
export class Product_manufacturerCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Product_manufacturerCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Product_manufacturerCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Product_manufacturerCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Product_manufacturerCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_manufacturerWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_manufacturerWhereUniqueInput[] | undefined;
}
