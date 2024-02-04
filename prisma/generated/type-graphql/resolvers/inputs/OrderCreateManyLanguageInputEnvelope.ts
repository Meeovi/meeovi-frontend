import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateManyLanguageInput } from "../inputs/OrderCreateManyLanguageInput";

@TypeGraphQL.InputType("OrderCreateManyLanguageInputEnvelope", {})
export class OrderCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderCreateManyLanguageInput], {
    nullable: false
  })
  data!: OrderCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
