import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyPluginInput } from "../inputs/Payment_methodCreateManyPluginInput";

@TypeGraphQL.InputType("Payment_methodCreateManyPluginInputEnvelope", {})
export class Payment_methodCreateManyPluginInputEnvelope {
  @TypeGraphQL.Field(_type => [Payment_methodCreateManyPluginInput], {
    nullable: false
  })
  data!: Payment_methodCreateManyPluginInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
