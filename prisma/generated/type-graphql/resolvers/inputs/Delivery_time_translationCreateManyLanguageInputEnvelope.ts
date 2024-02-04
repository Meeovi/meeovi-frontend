import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateManyLanguageInput } from "../inputs/Delivery_time_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Delivery_time_translationCreateManyLanguageInputEnvelope", {})
export class Delivery_time_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Delivery_time_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
