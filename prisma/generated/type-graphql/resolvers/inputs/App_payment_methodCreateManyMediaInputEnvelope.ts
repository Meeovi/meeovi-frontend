import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateManyMediaInput } from "../inputs/App_payment_methodCreateManyMediaInput";

@TypeGraphQL.InputType("App_payment_methodCreateManyMediaInputEnvelope", {})
export class App_payment_methodCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateManyMediaInput], {
    nullable: false
  })
  data!: App_payment_methodCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
