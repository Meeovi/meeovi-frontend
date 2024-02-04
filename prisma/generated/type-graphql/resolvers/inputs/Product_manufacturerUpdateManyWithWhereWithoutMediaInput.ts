import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_manufacturerScalarWhereInput } from "../inputs/Product_manufacturerScalarWhereInput";
import { Product_manufacturerUpdateManyMutationInput } from "../inputs/Product_manufacturerUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_manufacturerUpdateManyWithWhereWithoutMediaInput", {})
export class Product_manufacturerUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Product_manufacturerScalarWhereInput, {
    nullable: false
  })
  where!: Product_manufacturerScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_manufacturerUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_manufacturerUpdateManyMutationInput;
}
