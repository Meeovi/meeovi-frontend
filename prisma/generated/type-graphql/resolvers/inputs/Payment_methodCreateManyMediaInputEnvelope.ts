import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyMediaInput } from "../inputs/Payment_methodCreateManyMediaInput";

@TypeGraphQL.InputType("Payment_methodCreateManyMediaInputEnvelope", {})
export class Payment_methodCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [Payment_methodCreateManyMediaInput], {
    nullable: false
  })
  data!: Payment_methodCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
