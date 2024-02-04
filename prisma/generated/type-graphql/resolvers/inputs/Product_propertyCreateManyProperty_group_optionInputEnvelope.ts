import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_propertyCreateManyProperty_group_optionInput } from "../inputs/Product_propertyCreateManyProperty_group_optionInput";

@TypeGraphQL.InputType("Product_propertyCreateManyProperty_group_optionInputEnvelope", {})
export class Product_propertyCreateManyProperty_group_optionInputEnvelope {
  @TypeGraphQL.Field(_type => [Product_propertyCreateManyProperty_group_optionInput], {
    nullable: false
  })
  data!: Product_propertyCreateManyProperty_group_optionInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
