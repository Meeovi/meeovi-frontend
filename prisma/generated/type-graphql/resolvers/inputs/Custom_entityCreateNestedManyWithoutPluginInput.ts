import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateManyPluginInputEnvelope } from "../inputs/Custom_entityCreateManyPluginInputEnvelope";
import { Custom_entityCreateOrConnectWithoutPluginInput } from "../inputs/Custom_entityCreateOrConnectWithoutPluginInput";
import { Custom_entityCreateWithoutPluginInput } from "../inputs/Custom_entityCreateWithoutPluginInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityCreateNestedManyWithoutPluginInput", {})
export class Custom_entityCreateNestedManyWithoutPluginInput {
  @TypeGraphQL.Field(_type => [Custom_entityCreateWithoutPluginInput], {
    nullable: true
  })
  create?: Custom_entityCreateWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityCreateOrConnectWithoutPluginInput], {
    nullable: true
  })
  connectOrCreate?: Custom_entityCreateOrConnectWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateManyPluginInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_entityCreateManyPluginInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_entityWhereUniqueInput[] | undefined;
}
