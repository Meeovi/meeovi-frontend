import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadCreateManyProductInputEnvelope } from "../inputs/Product_downloadCreateManyProductInputEnvelope";
import { Product_downloadCreateOrConnectWithoutProductInput } from "../inputs/Product_downloadCreateOrConnectWithoutProductInput";
import { Product_downloadCreateWithoutProductInput } from "../inputs/Product_downloadCreateWithoutProductInput";
import { Product_downloadWhereUniqueInput } from "../inputs/Product_downloadWhereUniqueInput";

@TypeGraphQL.InputType("Product_downloadCreateNestedManyWithoutProductInput", {})
export class Product_downloadCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [Product_downloadCreateWithoutProductInput], {
    nullable: true
  })
  create?: Product_downloadCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: Product_downloadCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => Product_downloadCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: Product_downloadCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Product_downloadWhereUniqueInput], {
    nullable: true
  })
  connect?: Product_downloadWhereUniqueInput[] | undefined;
}
