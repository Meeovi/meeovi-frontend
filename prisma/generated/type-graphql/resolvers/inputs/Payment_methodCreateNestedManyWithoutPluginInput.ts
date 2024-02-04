import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyPluginInputEnvelope } from "../inputs/Payment_methodCreateManyPluginInputEnvelope";
import { Payment_methodCreateOrConnectWithoutPluginInput } from "../inputs/Payment_methodCreateOrConnectWithoutPluginInput";
import { Payment_methodCreateWithoutPluginInput } from "../inputs/Payment_methodCreateWithoutPluginInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedManyWithoutPluginInput", {})
export class Payment_methodCreateNestedManyWithoutPluginInput {
  @TypeGraphQL.Field(_type => [Payment_methodCreateWithoutPluginInput], {
    nullable: true
  })
  create?: Payment_methodCreateWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodCreateOrConnectWithoutPluginInput], {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateManyPluginInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_methodCreateManyPluginInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput[] | undefined;
}
