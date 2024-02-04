import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutProductInput } from "../inputs/Cms_pageCreateOrConnectWithoutProductInput";
import { Cms_pageCreateWithoutProductInput } from "../inputs/Cms_pageCreateWithoutProductInput";
import { Cms_pageUpdateToOneWithWhereWithoutProductInput } from "../inputs/Cms_pageUpdateToOneWithWhereWithoutProductInput";
import { Cms_pageUpsertWithoutProductInput } from "../inputs/Cms_pageUpsertWithoutProductInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateOneWithoutProductNestedInput", {})
export class Cms_pageUpdateOneWithoutProductNestedInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutProductInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutProductInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpsertWithoutProductInput, {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithoutProductInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  disconnect?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereInput, {
    nullable: true
  })
  delete?: Cms_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpdateToOneWithWhereWithoutProductInput, {
    nullable: true
  })
  update?: Cms_pageUpdateToOneWithWhereWithoutProductInput | undefined;
}
