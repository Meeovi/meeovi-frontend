import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateManyPluginInput } from "../inputs/Custom_entityCreateManyPluginInput";

@TypeGraphQL.InputType("Custom_entityCreateManyPluginInputEnvelope", {})
export class Custom_entityCreateManyPluginInputEnvelope {
  @TypeGraphQL.Field(_type => [Custom_entityCreateManyPluginInput], {
    nullable: false
  })
  data!: Custom_entityCreateManyPluginInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
