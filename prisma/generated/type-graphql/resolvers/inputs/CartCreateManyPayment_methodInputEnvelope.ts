import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartCreateManyPayment_methodInput } from "../inputs/CartCreateManyPayment_methodInput";

@TypeGraphQL.InputType("CartCreateManyPayment_methodInputEnvelope", {})
export class CartCreateManyPayment_methodInputEnvelope {
  @TypeGraphQL.Field(_type => [CartCreateManyPayment_methodInput], {
    nullable: false
  })
  data!: CartCreateManyPayment_methodInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
