import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateManyPluginInput } from "../inputs/Plugin_translationCreateManyPluginInput";

@TypeGraphQL.InputType("Plugin_translationCreateManyPluginInputEnvelope", {})
export class Plugin_translationCreateManyPluginInputEnvelope {
  @TypeGraphQL.Field(_type => [Plugin_translationCreateManyPluginInput], {
    nullable: false
  })
  data!: Plugin_translationCreateManyPluginInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
