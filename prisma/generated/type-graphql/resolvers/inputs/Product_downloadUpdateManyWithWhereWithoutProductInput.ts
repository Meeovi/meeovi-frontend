import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_downloadScalarWhereInput } from "../inputs/Product_downloadScalarWhereInput";
import { Product_downloadUpdateManyMutationInput } from "../inputs/Product_downloadUpdateManyMutationInput";

@TypeGraphQL.InputType("Product_downloadUpdateManyWithWhereWithoutProductInput", {})
export class Product_downloadUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => Product_downloadScalarWhereInput, {
    nullable: false
  })
  where!: Product_downloadScalarWhereInput;

  @TypeGraphQL.Field(_type => Product_downloadUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_downloadUpdateManyMutationInput;
}
