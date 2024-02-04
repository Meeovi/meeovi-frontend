import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateOrConnectWithoutLanding_pageInput } from "../inputs/Cms_pageCreateOrConnectWithoutLanding_pageInput";
import { Cms_pageCreateWithoutLanding_pageInput } from "../inputs/Cms_pageCreateWithoutLanding_pageInput";
import { Cms_pageUpdateToOneWithWhereWithoutLanding_pageInput } from "../inputs/Cms_pageUpdateToOneWithWhereWithoutLanding_pageInput";
import { Cms_pageUpsertWithoutLanding_pageInput } from "../inputs/Cms_pageUpsertWithoutLanding_pageInput";
import { Cms_pageWhereInput } from "../inputs/Cms_pageWhereInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageUpdateOneWithoutLanding_pageNestedInput", {})
export class Cms_pageUpdateOneWithoutLanding_pageNestedInput {
  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutLanding_pageInput, {
    nullable: true
  })
  create?: Cms_pageCreateWithoutLanding_pageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateOrConnectWithoutLanding_pageInput, {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutLanding_pageInput | undefined;

  @TypeGraphQL.Field(_type => Cms_pageUpsertWithoutLanding_pageInput, {
    nullable: true
  })
  upsert?: Cms_pageUpsertWithoutLanding_pageInput | undefined;

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

  @TypeGraphQL.Field(_type => Cms_pageUpdateToOneWithWhereWithoutLanding_pageInput, {
    nullable: true
  })
  update?: Cms_pageUpdateToOneWithWhereWithoutLanding_pageInput | undefined;
}
