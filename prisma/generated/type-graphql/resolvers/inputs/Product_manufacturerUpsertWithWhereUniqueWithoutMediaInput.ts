import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerCreateWithoutMediaInput } from "../inputs/Product_manufacturerCreateWithoutMediaInput";
import { Product_manufacturerUpdateWithoutMediaInput } from "../inputs/Product_manufacturerUpdateWithoutMediaInput";
import { Product_manufacturerWhereUniqueInput } from "../inputs/Product_manufacturerWhereUniqueInput";

@TypeGraphQL.InputType("Product_manufacturerUpsertWithWhereUniqueWithoutMediaInput", {})
export class Product_manufacturerUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_manufacturerWhereUniqueInput, {
    nullable: false
  })
  where!: Product_manufacturerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: Product_manufacturerUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => Product_manufacturerCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Product_manufacturerCreateWithoutMediaInput;
}
