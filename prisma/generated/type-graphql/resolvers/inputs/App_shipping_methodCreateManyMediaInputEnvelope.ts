import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodCreateManyMediaInput } from "../inputs/App_shipping_methodCreateManyMediaInput";

@TypeGraphQL.InputType("App_shipping_methodCreateManyMediaInputEnvelope", {})
export class App_shipping_methodCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [App_shipping_methodCreateManyMediaInput], {
    nullable: false
  })
  data!: App_shipping_methodCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
