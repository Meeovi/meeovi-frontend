import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_tagCreateManyTagInputEnvelope } from "../inputs/Landing_page_tagCreateManyTagInputEnvelope";
import { Landing_page_tagCreateOrConnectWithoutTagInput } from "../inputs/Landing_page_tagCreateOrConnectWithoutTagInput";
import { Landing_page_tagCreateWithoutTagInput } from "../inputs/Landing_page_tagCreateWithoutTagInput";
import { Landing_page_tagWhereUniqueInput } from "../inputs/Landing_page_tagWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_tagCreateNestedManyWithoutTagInput", {})
export class Landing_page_tagCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [Landing_page_tagCreateWithoutTagInput], {
    nullable: true
  })
  create?: Landing_page_tagCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_tagCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_tagCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_tagCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_tagWhereUniqueInput[] | undefined;
}
